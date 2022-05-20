#include <stdio.h>
#include <math.h>

int main() {

    int count;
    double length[100], a[100], v[100];
    double time, total;

    scanf("%d", &count);
    for(int i=0; i<count; i++){
        scanf("%lf %lf %lf", &length[i], &a[i], &v[i]);
    }

    for(int i=0; i<count; i++){
        time = sqrt(length[i]*2/a[i]);
        total = v[i]*time;
        printf("%.2lf\n", total);
    }

    return 0;
}
