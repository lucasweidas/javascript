function disableTabs() {
    tabs.forEach(btn => btn.classList.remove('active'));
}

function activeTab(tab) {
    tab.classList.add('active');
}

function hideContents() {
    const contents = document.querySelectorAll(`[data-content]`);
    contents.forEach(content => content.classList.add('hide'));
}

function showContent(value) {
    const content = document.querySelector(`[data-content='${value}']`);
    content.classList.remove('hide');
}

const tabs = document.querySelectorAll('[data-tab]');
tabs.forEach(tab =>
    tab.addEventListener('click', () => {
        const value = tab.dataset.tab;
        hideContents();
        disableTabs();
        activeTab(tab);
        showContent(value);
    })
);
