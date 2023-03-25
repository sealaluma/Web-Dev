a = int(input())
b = list(map(int, input().split()))
c = 0

for i in b:
    if c%2==0: print(i, end=" ")
    c += 1