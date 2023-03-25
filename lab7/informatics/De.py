a = int(input()) 
li = [int(i) for i in input().split()] 
last = li[0] 

for i in range(1,a): 
    if li[i] > 0 and last > 0 or li[i] < 0 and last < 0:
        print("YES")
        break
    last=li[i] 
else: print("NO")