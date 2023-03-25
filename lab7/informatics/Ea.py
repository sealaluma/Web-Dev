def minimum(a, b, c, d):
    mini = a  
    if b < mini:
        mini = b
    if c < mini:
        mini = c
    if d < mini:
        mini = d
    return mini

numbers = input().split()
a, b, c, d = map(int, numbers)
print(minimum(a,b,c,d))