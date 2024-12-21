let obj = JSON.parse($response.body);

// 修改会员信息
if (obj.data.memberInfo) {
    obj.data.memberInfo.memberStatusDesc = "永久会员";
    obj.data.memberInfo.memberTip = "尊贵的永久VIP会员";
    obj.data.memberInfo.memberFlag = "1";
}

// 修改用户基础信息
if (obj.data.userBaseInfo) {
    obj.data.userBaseInfo.vip = "true";
    obj.data.userBaseInfo.vipLevel = "10";
    obj.data.userBaseInfo.vtag = "1";
}

// 修改认证信息
if (obj.data.certificationBaseInfo) {
    obj.data.certificationBaseInfo.verification = "true";
    obj.data.certificationBaseInfo.accountVerifyMsg = "已认证";
    obj.data.certificationBaseInfo.accountVerifyCode = "2";
}

$done({ body: JSON.stringify(obj) }); 