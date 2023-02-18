---
categories: [english, testing]
---

# Svelte Prototype

## subtitle

For help type `tldr <command>`

`pacman -Syu`

[risky click of the day](https://youtu.be/hcaPRXx3EzA)

```cpp
#include <iostream>

int main() {
    std::cout << "Test\n";
}
```

```c
#include <stdio.h>

int main() {
    int n = 69;
    printf("%d\n", n);
}
```

```rs=
#![feature(yeet_expr)]
fn main() {
    something();
}

fn something() -> Option<()> {
    do yeet;
}
```

```py
x = [i * 2 - 1 for i in range(10)]

def func(n: int) -> None:
    print(n)
```

```
curl -s -X POST -H 'Content-Type: application/json' -d '{"name":"123","rule_type":"En"}' $addr/threads | jq
```

```=
library ieee;

use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use ieee.std_logic_unsigned.all;

use work.main_package.all;

entity main is port (opcode : in std_logic_vector(3 downto 0);
          rs, rt : in std_logic_vector(1 downto 0);
          data   : in std_logic_vector(7 downto 0);
          bus_wire : inout std_logic_vector(7 downto 0);
          clk, btn, reset : in std_logic;
          state_debug : out std_logic_vector(2 downto 0);
          open_data_debug : out std_logic;
          seg5, seg4, seg3, seg2, seg1, seg0 : out std_logic_vector(6 downto 0));
end main;

architecture func of main is
    constant LOAD: std_logic_vector ( 3 downto 0 ) := "0000";
    constant MOVE: std_logic_vector ( 3 downto 0 ) := "0001";
    constant ADDD: std_logic_vector ( 3 downto 0 ) := "0010";
    constant ANDD: std_logic_vector ( 3 downto 0 ) := "0011";
    constant SUBB: std_logic_vector ( 3 downto 0 ) := "0101";
    constant BBUS: std_logic_vector ( 3 downto 0 ) := "1001";
    constant SLTT: std_logic_vector ( 3 downto 0 ) := "0100";

    signal r0 : std_logic_vector(7 downto 0);
    signal r1 : std_logic_vector(7 downto 0);
    signal r2 : std_logic_vector(7 downto 0);
    signal r3 : std_logic_vector(7 downto 0);

    signal rs_wire, rt_wire : std_logic_vector(7 downto 0) := "00000000";

    signal trigger : std_logic;
    type OPERATION is (
        OPEN_RT,
        WRITE_ALU,
        OPEN_RS,
        WRITE_RESULT,
        OPEN_ALU,
        WRITE_RS,
        OPEN_DATA
    );
    signal state : OPERATION := OPEN_DATA;
    signal A, G : std_logic_vector(7 downto 0) := "00000000";
    signal reg_out : std_logic_vector(3 downto 0);
    signal extern : std_logic := '0';
    signal G_out : std_logic := '0';
begin
    process(clk, btn, reset)
        variable clk_counter : integer := 0;
    begin
        if reset = '1' then
            clk_counter := 0;
        elsif (rising_edge(clk)) then
            if btn = '1' then
                clk_counter := clk_counter + 1;
                trigger <= '0';
            elsif clk_counter >= 100000 then
                clk_counter := 0;
                trigger <= '1';
            end if;
        end if;
    end process;

    process(trigger, btn, reset)
    begin
        if reset = '1' then
            state <= OPEN_DATA;
        elsif rising_edge(trigger) then
            case state is
                when OPEN_RT =>
                    extern <= '0';
                    case rt is
                        when "00" => reg_out <= "0001";
                        when "01" => reg_out <= "0010";
                        when "10" => reg_out <= "0100";
                        when "11" => reg_out <= "1000";
                    end case;

                    case opcode is
                        when MOVE => state <= WRITE_RS;
                        when others => state <= WRITE_ALU;
                    end case;
                when WRITE_ALU =>
                    A <= bus_wire;
                    state <= OPEN_RS;
                when OPEN_RS =>
                    case rs is
                        when "00" => reg_out <= "0001";
                        when "01" => reg_out <= "0010";
                        when "10" => reg_out <= "0100";
                        when "11" => reg_out <= "1000";
                    end case;
                    state <= WRITE_RESULT;
                when WRITE_RESULT =>
                    case opcode is
                        when ADDD => G <= bus_wire + A;
                        when ANDD => G <= bus_wire and A;
                        when SUBB => G <= bus_wire - A;
                        when BBUS => G <= A - bus_wire;
                        when SLTT =>
                            if bus_wire < A then
                                G <= "00000001";
                            else
                                G <= "00000000";
                            end if;
                        when others => NULL;
                    end case;
                    state <= OPEN_ALU;
                when OPEN_ALU =>
                    reg_out <= "0000";
                    G_out <= '1';
                    state <= WRITE_RS;
                when WRITE_RS =>
                    case rs is
                        when "00" => r0 <= bus_wire;
                        when "01" => r1 <= bus_wire;
                        when "10" => r2 <= bus_wire;
                        when "11" => r3 <= bus_wire;
                    end case;
                    state <= OPEN_DATA;
                when OPEN_DATA =>
                    reg_out <= "0000";
                    G_out <= '0';
                    extern <= '1';
                    case opcode is
                        when LOAD => state <= WRITE_RS;
                        when others => state <= OPEN_RT;
                    end case;
            end case;
        end if;
    end process;

    t0: tri_state port map(r0, reg_out(0), bus_wire);
    t1: tri_state port map(r1, reg_out(1), bus_wire);
    t2: tri_state port map(r2, reg_out(2), bus_wire);
    t3: tri_state port map(r3, reg_out(3), bus_wire);
    t4: tri_state port map(G, G_out, bus_wire);
    t5: tri_state port map(data, extern, bus_wire);

    rs_wire <= r0 when rs = "00" else
               r1 when rs = "01" else
               r2 when rs = "10" else
               r3 when rs = "11";

    rt_wire <= r0 when rt = "00" else
               r1 when rt = "01" else
               r2 when rt = "10" else
               r3 when rt = "11";

    -- hex5: seven_seg port map(rs_wire(7 downto 4), seg5);
    -- hex4: seven_seg port map(rs_wire(3 downto 0), seg4);
    -- hex3: seven_seg port map(rt_wire(7 downto 4), seg3);
    -- hex2: seven_seg port map(rt_wire(3 downto 0), seg2);
    hex5: seven_seg port map(r3(3 downto 0), seg5);
    hex4: seven_seg port map(r2(3 downto 0), seg4);
    hex3: seven_seg port map(r1(3 downto 0), seg3);
    hex2: seven_seg port map(r0(3 downto 0), seg2);
    hex1: seven_seg port map(bus_wire(7 downto 4), seg1);
    hex0: seven_seg port map(bus_wire(3 downto 0), seg0);

    state_debug <= "000" when state = OPEN_RT else
                   "001" when state = WRITE_ALU else
                   "010" when state = OPEN_RS else
                   "011" when state = WRITE_RESULT else
                   "100" when state = OPEN_ALU else
                   "101" when state = WRITE_RS else
                   "110" when state = OPEN_DATA;

    open_data_debug <= extern;
end func;
```

Test

| /    | matrix |
| ---- | ------ |
| test | 1      |

> There are no accidents

-- Master Oogway
