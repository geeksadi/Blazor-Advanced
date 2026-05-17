window.blazorInterop = {

    // ── Виклик JS з C# ──────────────────────────────────────────────────

    scrollToTop: function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    getWindowSize: function () {
        return {
            width:  window.innerWidth,
            height: window.innerHeight
        };
    },

    copyToClipboard: function (text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            // Fallback для старих браузерів
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    },

    // ── Виклик C# з JS ──────────────────────────────────────────────────

    // Викликає C# метод через DotNetObjectReference після затримки
    callDotNetDelayed: function (dotNetRef, delayMs) {
        setTimeout(function () {
            dotNetRef.invokeMethodAsync('OnCalledFromJs', 'Привіт від JS! (відкладений виклик)');
        }, delayMs);
    },

    // Таймер — викликає C# кожні 2 секунди
    _timerId: null,

    startTimer: function (dotNetRef) {
        if (window.blazorInterop._timerId) {
            clearInterval(window.blazorInterop._timerId);
        }
        let count = 1;
        window.blazorInterop._timerId = setInterval(function () {
            dotNetRef.invokeMethodAsync('OnCalledFromJs', `Tick #${count++} від JS таймера ⏰`);
        }, 2000);
    },

    stopTimer: function () {
        if (window.blazorInterop._timerId) {
            clearInterval(window.blazorInterop._timerId);
            window.blazorInterop._timerId = null;
        }
    }
};
