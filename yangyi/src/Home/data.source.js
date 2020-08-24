import React from 'react';
export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav~ke8eamikni',
        to: '当前页面 ID 地址，参考如上',
        children: '手作り',
        className: 'menu-item',
      },
      {
        name: 'linkNav~ke8eav5f2dr',
        to: '当前页面 ID 地址，参考如上',
        children: 'イラスト',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: '当前页面 ID 地址，参考如上',
        children: 'ログイン',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title ke8ed9kffm9-editor_css',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content ke8edf3hist-editor_css',
          children: '一个高效的页面动画解决方案',
        },
        button: {
          className: 'banner1-button ke8edd6vstt-editor_css',
          children: 'Learn More',
        },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
  },
};
