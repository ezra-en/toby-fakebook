import toHtml from "../util/toHtml"

const Layout = toHtml(`<main class='container flex'>
  <div>
    <input type='checkbox' id='drawer-left' class='drawer-toggle' />
    <label for='drawer-left' class='btn btn-secondary'>
      <span class='bi bi-list font-black text-xl'></span>
    </label>
    <label class='overlay' for='drawer-left'></label>
    <div class='drawer'>
      <div class='drawer-content'>
        <label class='absolute top-4 right-4' for='drawer-left'><span class='bi bi-x-circle text-secondary font-black text-xl'></span></label>
        <p>Sidebar Content</p>
      </div>
    </div>
  </div>
  <div class='main-content w-full max-h-full'></div>
</main>`);

export default Layout;