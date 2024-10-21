function nextPage(pageNumber) {
    const currentPage = document.querySelector('.page.active');
    currentPage.classList.remove('active');
    const nextPage = document.getElementById(`page-${pageNumber}`);
    nextPage.classList.add('active');
}

function prevPage(pageNumber) {
    const currentPage = document.querySelector('.page.active');
    currentPage.classList.remove('active');
    const prevPage = document.getElementById(`page-${pageNumber}`);
    prevPage.classList.add('active');
}
