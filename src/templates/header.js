import toHtml from "../util/toHtml";

const Header = toHtml(`
<header class='flex justify-between px-3 py-2'>
  <h1 class='inline-block text-3xl font-black text-indigo-800 p-6'>App Title</h1>
  <div class='header-controls'>
  <div class='light-switch btn btn-outline-secondary text-3xl font-black text-secondary'><i class="bi-brightness-high"></i></div>
  </div>
</header>`);

export default Header;