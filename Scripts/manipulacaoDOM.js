function changeP(text = 'Texto alterado'){
    document.querySelectorAll('p').forEach(( p => { p.innerHTML = text}));
}