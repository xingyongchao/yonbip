function HelloMessage(props) {
    const windowLocationOrigin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');//ie8-ie10不兼容的原因

    const login_server = getHost(),
        yhtssoisloginUrl = windowLocationOrigin + '/login_light',
        _destUrl = `/yhtssoislogin`, //只有这个不是登陆成功后跳转的链接
        realservice = windowLocationOrigin;
    return (
        <div className="wrap">
            <div className="left">
                <img src="./static/logo.png" className="logo" title="yonbip" />
                <iframe
                    src={`${login_server}/cas/login?sysid=yonsuite&mode=light&service=${encodeURIComponent(yhtssoisloginUrl + '?yhtdesturl=' + _destUrl + '&yhtrealservice=' + realservice)}&locale=${getCurrentLangCode()}`}
                    frameborder="0"
                    width="450px"
                    height="373px"
                    className="iframe"
                />
                <p className="footer">用友网络科技股份有限公司 © Copyright 2019 京ICP备05007539号-24 京ICP证100714号</p>
            </div>
            <div className="right">
                <div className="header">
                    <span>商业创新 如此便捷</span>
                    <p>数智时代的商业创新平台</p>
                </div>
                <span className="applyUse">申请试用</span>
                <img src="./static/pic.png" alt="" />
            </div>
        </div>
    );
}

const element = <HelloMessage />;

ReactDOM.render(
    element,
    document.getElementById('app')
);