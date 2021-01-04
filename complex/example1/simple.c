#include <stdio.h>

int main(int argc, char const *argv[])
{
    int a = 12;
    if (a > 10) {
        a = a % 10;
    }
    int sum = 1;
    while((10 - a) != 0) {
        sum = sum * 2;
        a = a + 1;
    }
    printf("%d\n", sum); // 2^8 = 256
    return 0;
}
