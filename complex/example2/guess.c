#include <stdio.h>

int main(int argc, char const *argv[])
{
    int dest = 24;

    int times = 0;
    int first = 12;
    while (first != dest) {
        if (first < dest) {
            first++;
        } else {
            first--;
        }
        times++;
    }
    printf("dest: %d\n", first);
    printf("guess times: %d\n", times);
    return 0;
}
