def combo_string(a, b):
    s = a
    l = b
    if len(b)<len(a):
        s=b
        l=a
    return s+l+s