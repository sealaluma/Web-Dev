a = int(input())
b = list(map(int, input().split()))

for i in b:
    if i%2==0: print(i, end=" ")