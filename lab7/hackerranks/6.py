def is_leap (a):
    if (a%4==0 and a%100!=0) or a%400==0:
        return True
    else:
        return False

year = int(input())
print(is_leap(year))