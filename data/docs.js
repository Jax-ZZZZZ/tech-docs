module.exports = {
  newUserGuide: {
    name: { zh: '新用户须知', en: 'New User Guide' },
    children: [
      {
        name: { zh: '概览', en: 'Overview' },
        items: [
          {
            id: 'new-user-overview',
            title: { zh: '新用户须知', en: 'New User Overview' },
            files: {
              zh: 'new-user-guide/new-user-overview-cn.md',
              en: 'new-user-guide/new-user-overview-en.md'
            }
          }
        ]
      }
    ]
  },

  cardTerminalGuide: {
    name: { zh: '刷卡机使用指南', en: 'Card Terminal User Guide' },
    children: [
      {
        name: { zh: 'PAX 机型', en: 'PAX Models' },
        items: [
          {
            id: 'pax-s300',
            title: { zh: 'PAX S300 & A35 基本操作', en: 'PAX S300 & A35 Basic Operations' },
            files: {
              zh: 'card-terminal-guide/pax-s300-cn.md',
              en: 'card-terminal-guide/pax-s300-en.md'
            }
          },
          {
            id: 'pax-a80',
            title: { zh: 'PAX A80 & A920 基本操作', en: 'PAX A80 & A920 Basic Operations' },
            files: {
              zh: 'card-terminal-guide/pax-a80-cn.md',
              en: 'card-terminal-guide/pax-a80-en.md'
            }
          },
          {
            id: 'pax-s80',
            title: { zh: 'PAX S80 基本操作', en: 'PAX S80 Basic Operations' },
            files: {
              zh: 'card-terminal-guide/pax-s80-cn.md',
              en: 'card-terminal-guide/pax-s80-en.md'
            }
          }
        ]
      }
    ]
  },

  hardwareSetupGuide: {
    name: { zh: '硬件设置指南', en: 'Hardware Setup Guide' },
    children: [
      {
        name: { zh: '硬件连接', en: 'Hardware Connections' },
        items: [
          {
            id: 'connect-to-computer',
            title: { zh: '如何连接电脑', en: 'How to Connect to a Computer' },
            files: {
              zh: 'hardware-setup-guide/connect-to-computer-cn.md',
              en: 'hardware-setup-guide/connect-to-computer-en.md'
            }
          },
          {
            id: 'connect-front-desk-printer',
            title: { zh: '如何连接前台小票打印机', en: 'How to Connect a Guest Receipt Printer' },
            files: {
              zh: 'hardware-setup-guide/connect-front-desk-printer-cn.md',
              en: 'hardware-setup-guide/connect-front-desk-printer-en.md'
            }
          },
          {
            id: 'setup-cash-drawer',
            title: { zh: '如何设置连接钱箱', en: 'How to Connect a Cash Drawer' },
            files: {
              zh: 'hardware-setup-guide/setup-cash-drawer-cn.md',
              en: 'hardware-setup-guide/setup-cash-drawer-en.md'
            }
          },
          {
            id: 'connect-kitchen-printer',
            title: { zh: '如何连接厨房打印机', en: 'How to Connect a Kitchen Printer' },
            files: {
              zh: 'hardware-setup-guide/connect-kitchen-printer-cn.md',
              en: 'hardware-setup-guide/connect-kitchen-printer-en.md'
            }
          },
          {
            id: 'connect-gift-card-reader',
            title: { zh: '如何连接礼品卡刷卡槽', en: 'How to Connect a Gift Card Reader' },
            files: {
              zh: 'hardware-setup-guide/connect-gift-card-reader-cn.md',
              en: 'hardware-setup-guide/connect-gift-card-reader-en.md'
            }
          },
          {
            id: 'connect-external-display',
            title: { zh: '如何连接外屏', en: 'How to Connect an External Display' },
            files: {
              zh: 'hardware-setup-guide/connect-external-display-cn.md',
              en: 'hardware-setup-guide/connect-external-display-en.md'
            }
          }
        ]
      }
    ]
  },

  posSystemGuide: {
    name: { zh: 'POS 使用指南', en: 'POS System User Guide' },
    children: [
      {
        name: { zh: '常用功能', en: 'Common Tasks' },
        items: [
          {
            id: 'adjust-prices',
            title: { zh: '如何调整价格', en: 'How to Adjust Prices' },
            files: {
              zh: 'pos-system-guide/adjust-prices-cn.md',
              en: 'pos-system-guide/adjust-prices-en.md'
            }
          },
          {
            id: 'add-menu-items',
            title: { zh: '如何新增菜品', en: 'How to Add New Menu Items' },
            files: {
              zh: 'pos-system-guide/add-menu-items-cn.md',
              en: 'pos-system-guide/add-menu-items-en.md'
            }
          },
          {
            id: 'employee-clock-in-out',
            title: { zh: '如何设置员工打卡', en: 'How to Set Up Employee Clock-In / Clock-Out' },
            files: {
              zh: 'pos-system-guide/employee-clock-in-out-cn.md',
              en: 'pos-system-guide/employee-clock-in-out-en.md'
            }
          },
          {
            id: 'more-pos-features',
            title: { zh: '更多 POS 功能', en: 'And More' },
            files: {
              zh: 'pos-system-guide/more-pos-features-cn.md',
              en: 'pos-system-guide/more-pos-features-en.md'
            }
          }
        ]
      }
    ]
  },

  handheldDeviceGuide: {
    name: { zh: '手持设备使用指南', en: 'Handheld Device User Guide' },
    children: [
      {
        name: { zh: '设备操作', en: 'Device Basics' },
        items: [
          {
            id: 'power-on-and-volume',
            title: { zh: '如何开机、调整音量', en: 'How to Power On the Device and Adjust Volume' },
            files: {
              zh: 'handheld-device-guide/power-on-and-volume-cn.md',
              en: 'handheld-device-guide/power-on-and-volume-en.md'
            }
          },
          {
            id: 'check-serial-number',
            title: { zh: '如何查看 SN 号码', en: 'How to Check the SN (Serial Number)' },
            files: {
              zh: 'handheld-device-guide/check-serial-number-cn.md',
              en: 'handheld-device-guide/check-serial-number-en.md'
            }
          },
          {
            id: 'login-bm-app',
            title: { zh: '如何登录 BM App', en: 'How to Log In to the BM App' },
            files: {
              zh: 'handheld-device-guide/login-bm-app-cn.md',
              en: 'handheld-device-guide/login-bm-app-en.md'
            }
          },
          {
            id: 'purchase-receipt-paper',
            title: { zh: '如何购买打印小票', en: 'How to Purchase Receipt Paper' },
            files: {
              zh: 'handheld-device-guide/purchase-receipt-paper-cn.md',
              en: 'handheld-device-guide/purchase-receipt-paper-en.md'
            }
          }
        ]
      }
    ]
  }
};
