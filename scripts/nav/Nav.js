

export const Nav = (navElement) => {
    const currentPage = document.title;
    const navClass = (document.title === navElement.name ? "nav--current" : "")
    return `
    <a class="${navClass}" href=${navElement.href}>${navElement.name}</a>`
}