const CookieOption = ()=>{
    const options = {
        expires: new Date(Date.now() + 60 * 60 * 1000 * 24 * 30), // 30 days
        httpOnly: true,
        secure: false,
    }
    return options;
}