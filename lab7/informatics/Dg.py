a = int(input()) 
b = [int(i) for i in input().split()]

for i in b[::-1]:
    print(i, end=" ")