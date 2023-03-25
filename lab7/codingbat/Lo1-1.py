def cigar_party(cigars, is_weekend):
    if (cigars<61 and cigars>=40) or (is_weekend == True and cigars>=40):
        return True
    else:
        return False