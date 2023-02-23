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

Source Code

```c=
// fib.c

int fib(int n) {
    int i, n1 = 1, n2 = 1, tmp = 0;

    for (i = 2; i < n; ++i) {
        tmp = n1 + n2;
        n1 = n2;
        n2 = tmp;
    }

    return n2;
}
```

Compile Command(Clang 15):

```
clang -S -fno-asynchronous-unwind-tables -fno-exceptions -fno-rtti -masm=intel -fverbose-asm fib.c -o fib.asm
```

Assembly Output:

```x86asm=
# fib.asm

	.text
	.intel_syntax noprefix
	.file	"fib.c"
	.globl	fib                             # -- Begin function fib
	.p2align	4, 0x90
	.type	fib,@function
fib:                                    # @fib
# %bb.0:
	push	rbp
	mov	rbp, rsp
	mov	dword ptr [rbp - 4], edi
	mov	dword ptr [rbp - 12], 1
	mov	dword ptr [rbp - 16], 1
	mov	dword ptr [rbp - 20], 0
	mov	dword ptr [rbp - 8], 2
.LBB0_1:                                # =>This Inner Loop Header: Depth=1
	mov	eax, dword ptr [rbp - 8]
	cmp	eax, dword ptr [rbp - 4]
	jge	.LBB0_4
# %bb.2:                                #   in Loop: Header=BB0_1 Depth=1
	mov	eax, dword ptr [rbp - 12]
	add	eax, dword ptr [rbp - 16]
	mov	dword ptr [rbp - 20], eax
	mov	eax, dword ptr [rbp - 16]
	mov	dword ptr [rbp - 12], eax
	mov	eax, dword ptr [rbp - 20]
	mov	dword ptr [rbp - 16], eax
# %bb.3:                                #   in Loop: Header=BB0_1 Depth=1
	mov	eax, dword ptr [rbp - 8]
	add	eax, 1
	mov	dword ptr [rbp - 8], eax
	jmp	.LBB0_1
.LBB0_4:
	mov	eax, dword ptr [rbp - 16]
	pop	rbp
	ret
.Lfunc_end0:
	.size	fib, .Lfunc_end0-fib
                                        # -- End function
	.ident	"clang version 15.0.7"
	.section	".note.GNU-stack","",@progbits
	.addrsig
```

Test

| /    | matrix |
| ---- | ------ |
| test | 1      |

> There are no accidents

-- Master Oogway
