function LoginFormValidityCheck(){
    this.sendBtn = document.querySelector('.send-btn');
    this.checkedResult = document.querySelector('.checked-result');
    this.email = document.querySelector("[name='email']"); // name 속성을 얻어오는 방법
    this.password = document.querySelector("[name='password']"); 
    this.emailValidityFlag = false; // 이메일 유효성 플래그
    this.passwordValidityFlag = false; // 비밀번호 유효성 플래그
}

LoginFormValidityCheck.prototype.registerEvent = function(){
    /* 이메일 유효성 검증 */
    this.email.addEventListener('blur', () => {
        this.sendBtn.setAttribute('style', 'transform: unset;');

        let emailVal = this.email.value; // 이메일 입력값
        let validFlag = (/^[\w+_]\w+@\w+\.\w+$/).test(emailVal); // test 메소드가 유효성 검증

        this.checkedResult.setAttribute('style', 'font-weight:bold;display:block');
        if(!validFlag){ 
            if(emailVal === ''){
                this.checkedResult.innerHTML = '이메일을 입력해주세요!';
            }
            else{
                this.checkedResult.innerHTML = '올바르지 않은 이메일입니다!';
            }
            this.checkedResult.style.color = "red";
            this.emailValidityFlag = false; // 플래그 설정

            this.email.value = ""; // 입력한 것 없애기
        } 
        else{
            this.checkedResult.innerHTML = '올바른 이메일입니다.';
            this.checkedResult.style.color = "blue";
            this.emailValidityFlag = true; // 플래그 설정

            if(!this.passwordValidityFlag){ // 아직 비밀번호 제대로 입력 안했으면
                this.password.focus(); // 비밀번호 입력에 포커스
            }
            else{
                this.sendBtn.setAttribute('style', 'transition: transform 0.8s;transform: rotate(-360deg);');
            }
        }
        setTimeout(() => { this.checkedResult.style.display = "none" }, 1000);
    });

    /* 비밀번호 유효성 검증 */
    this.password.addEventListener('blur', () => {
        this.sendBtn.setAttribute('style', 'transform: unset;');
        let passwordVal = this.password.value; // 비밀번호 입력값
        const PASSWORD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,13})/);
        // (?=.*[a-z]) : 적어도 한 개의 영소문자 포함, (?=.*[A-Z]) : 적어도 한 개의 영대문자 포함
        // (?=.*[0-9]) : 적어도 한 개의 숫자 포함, (?=.*[!@#\$%\^&\*]) : 적어도 한 개의 특수문자 포함
        // (?=.{8,13}) : 최소 8자리에서 13자리 이하 길이의 값 입력필요
        let validFlag = (PASSWORD_REGEX).test(passwordVal); // test 메소드가 유효성 검증

        this.checkedResult.setAttribute('style', 'font-weight:bold;display:block');
        if(!validFlag){ 
            if(passwordVal === ''){
                this.checkedResult.innerHTML = '비밀번호를 입력해주세요!';
            }
            else{
                this.checkedResult.innerHTML = '비밀번호 형식을 준수하지 않습니다!';
            }
            this.checkedResult.style.color = "red";
            this.passwordValidityFlag = false; // 플래그 설정

            this.password.value = ""; // 입력한 것 없애기
        } 
        else{
            this.checkedResult.innerHTML = '적합한 비밀번호입니다.';
            this.checkedResult.style.color = "blue";
            this.passwordValidityFlag = true; // 플래그 설정

            if(!this.emailValidityFlag){ // 아직 이메일 제대로 입력 안했으면
                this.email.focus(); // 이메일 입력에 포커스
            }
            else{
                this.sendBtn.setAttribute('style', 'transition: transform 0.8s;transform: rotate(360deg);');
            }
        }
        setTimeout(() => { this.checkedResult.style.display = "none" }, 1000);
    });

    /* 서버로 제출전 이메일, 패스워드가 모두 유효한지 검증 후 전송 */
    this.sendBtn.addEventListener('click', (evt) => {
        evt.preventDefault(); // submit 버튼의 디폴트 행동(서버로 전송하는 것)을 막음 

        // 이메일과 비밀번호 둘 다 유효한 경우에만 submit 처리
        if(this.emailValidityFlag && this.passwordValidityFlag){
            alert("로그인 되었습니다!");
            this.email.value = '';
            this.password.value = '';
            // document.querySelector('#myform').submit(); // submit을 수행
        }
        else if(!this.emailValidityFlag && !this.passwordValidityFlag){
            this.email.focus();
            alert("이메일과 패스워드를 다시 입력해주십시오!");
        }
        else if(!this.emailValidityFlag){
            this.email.focus();
            alert("이메일을 다시 입력해주십시오!");
        }
        else if(!this.passwordValidityFlag){
            this.password.focus();
            alert("패스워드를 다시 입력해주십시오!");
        }
    });
};
(new LoginFormValidityCheck().registerEvent());