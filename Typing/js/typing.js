const typing_ui = {
    content: document.querySelector(".content"),

    init() {
        document.body.addEventListener("load", this.runTyping());
    },

    runTyping() {
        let msg = this.content.innerText;
        let len = msg.length;
        setTimeout(() => { this.typeWord(msg, len, 0) }, 50);
    },

    typeWord(msg, len, cnt) {
        this.content.style.display = 'block';
        if (cnt <= len) {
            this.content.innerHTML = msg.substring(0, cnt++);
            setTimeout(() => { this.typeWord(msg, len, cnt);
                let param = cnt * 3;
                this.content.style.color = "rgb(" + param + "," + param + "," + param + ")";
             }, 100);
        }
        else {
            this.typeWord(msg, len, 0);
        }
    }
};
typing_ui.init();