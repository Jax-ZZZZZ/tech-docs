module.exports = {
  newUserGuide: {
    name: { zh: '新用户必读', en: 'New User Notice' },
    children: [
      {
        name: { zh: '概览', en: 'Overview' },
        items: [
          {
            id: 'new-user-overview-1',
            title: {
              zh: 'POS 与刷卡机使用前须知',
              en: 'POS & Payment Terminal Usage Notice'
            },
            files: {
              zh: 'new-user-guide/new-user-overview-1-cn.md',
              en: 'new-user-guide/new-user-overview-1-en.md'
            }
          },
          {
            id: 'new-user-overview-2',
            title: {
              zh: '支付方式安全与风险',
              en: 'Payment Method Security & Risk Disclosure'
            },
            files: {
              zh: 'new-user-guide/new-user-overview-2-cn.md',
              en: 'new-user-guide/new-user-overview-2-en.md'
            }
          },
          {
            id: 'new-user-overview-3',
            title: {
              zh: '信用卡附加费与合规',
              en: 'Credit Card Surcharge Compliance Policy'
            },
            files: {
              zh: 'new-user-guide/new-user-overview-3-cn.md',
              en: 'new-user-guide/new-user-overview-3-en.md'
            }
          },
          {
            id: 'new-user-overview-4',
            title: {
              zh: '储蓄卡预授权说明',
              en: 'Debit Card Pre-Authorization Notice'
            },
            files: {
              zh: 'new-user-guide/new-user-overview-4-cn.md',
              en: 'new-user-guide/new-user-overview-4-en.md'
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
            title: {
              zh: '如何连接前台小票打印机',
              en: 'How to Connect a Guest Receipt Printer'
            },
            files: {
              zh: 'hardware-setup-guide/connect-front-desk-printer-cn.md',
              en: 'hardware-setup-guide/connect-front-desk-printer-en.md'
            }
          },
          {
            id: 'connect-kitchen-printer',
            title: {
              zh: '如何连接厨房打印机',
              en: 'How to Connect a Kitchen Printer'
            },
            files: {
              zh: 'hardware-setup-guide/connect-kitchen-printer-cn.md',
              en: 'hardware-setup-guide/connect-kitchen-printer-en.md'
            }
          },
          {
            id: 'setup-cash-drawer',
            title: {
              zh: '如何连接并设置钱箱',
              en: 'How to Connect a Cash Drawer'
            },
            files: {
              zh: 'hardware-setup-guide/setup-cash-drawer-cn.md',
              en: 'hardware-setup-guide/setup-cash-drawer-en.md'
            }
          },
          {
            id: 'setup-callerid',
            title: {
              zh: '如何连接并设置来电显示',
              en: 'How to Connect a Caller ID Device'
            },
            files: {
              zh: 'hardware-setup-guide/setup-callerid-cn.md',
              en: 'hardware-setup-guide/setup-callerid-en.md'
            }
          },
          {
            id: 'connect-gift-card-reader',
            title: {
              zh: '如何连接礼品卡刷卡槽',
              en: 'How to Connect a Gift Card Reader'
            },
            files: {
              zh: 'hardware-setup-guide/connect-gift-card-reader-cn.md',
              en: 'hardware-setup-guide/connect-gift-card-reader-en.md'
            }
          },
          {
            id: 'connect-external-display',
            title: {
              zh: '如何连接外屏',
              en: 'How to Connect an External Display'
            },
            files: {
              zh: 'hardware-setup-guide/connect-external-display-cn.md',
              en: 'hardware-setup-guide/connect-external-display-en.md'
            }
          },
          {
            id: 'hhd-change',
            title: {
              zh: '如何更换硬盘',
              en: 'How to Replace the Hard Drive'
            },
            files: {
              zh: 'hardware-setup-guide/hhd-change-cn.md',
              en: 'hardware-setup-guide/hhd-change-en.md'
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
            id: 'connect-cc-machines-A35 / S300',
            title: {
              zh: '如何连接刷卡机 A35 / S300',
              en: 'How to Connect a Card Terminal A35 / S300'
            },
            files: {
              zh: 'card-terminal-guide/connect-cc-machines-s300-a35-cn.md',
              en: 'card-terminal-guide/connect-cc-machines-s300-a35-en.md'
            }
          },
          {
            id: 'pax-s300',
            title: {
              zh: '刷卡机 A35 & S300 基本使用操作',
              en: 'PAX A35 & S300 Basic Operations'
            },
            files: {
              zh: 'card-terminal-guide/pax-s300-cn.md',
              en: 'card-terminal-guide/pax-s300-en.md'
            }
          },
          {
            id: 'connect-cc-machines-A80/A920',
            title: {
              zh: '如何连接刷卡机 A80 / A920',
              en: 'How to Connect a Card Terminal A80 / A920'
            },
            files: {
              zh: 'card-terminal-guide/connect-cc-machines-a80-a920-cn.md',
              en: 'card-terminal-guide/connect-cc-machines-a80-a920-en.md'
            }
          },
          {
            id: 'pax-a80',
            title: {
              zh: '刷卡机 A80 & A920 基本使用操作',
              en: 'PAX A80 & A920 Basic Operations'
            },
            files: {
              zh: 'card-terminal-guide/pax-a80-cn.md',
              en: 'card-terminal-guide/pax-a80-en.md'
            }
          },
          {
            id: 'connect-cc-machines-S80',
            title: {
              zh: '如何连接刷卡机 S80',
              en: 'How to Connect a Card Terminal S80'
            },
            files: {
              zh: 'card-terminal-guide/connect-cc-machines-s80-cn.md',
              en: 'card-terminal-guide/connect-cc-machines-s80-en.md'
            }
          },
          {
            id: 'pax-s80',
            title: {
              zh: '刷卡机 S80 基本操作',
              en: 'PAX S80 Basic Operations'
            },
            files: {
              zh: 'card-terminal-guide/pax-s80-cn.md',
              en: 'card-terminal-guide/pax-s80-en.md'
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
            id: '01adjust-prices',
            title: {
              zh: '1 如何下单（堂吃 / 外送 / 大厅）',
              en: '1 Place Orders (Dine-in / Takeout / Delivery)'
            },
            files: {
              zh: 'pos-system-guide/01adjust-prices-cn.md',
              en: 'pos-system-guide/01adjust-prices-en.md'
            }
          },
          {
            id: '02add-menu-items',
            title: {
              zh: '2 如何查看每日报表',
              en: '2 View Daily Reports'
            },
            files: {
              zh: 'pos-system-guide/02add-menu-items-cn.md',
              en: 'pos-system-guide/02add-menu-items-en.md'
            }
          },
          {
            id: '03employee-clock-in-out',
            title: {
              zh: '3 如何快速修改菜品价格或名称',
              en: '3 Quickly Edit Item Price or Name'
            },
            files: {
              zh: 'pos-system-guide/03employee-clock-in-out-cn.md',
              en: 'pos-system-guide/03employee-clock-in-out-en.md'
            }
          },
          {
            id: '04add-new-item',
            title: {
              zh: '4 如何添加新的菜品',
              en: '4 Add New Menu Items'
            },
            files: {
              zh: 'pos-system-guide/04add-new-item-cn.md',
              en: 'pos-system-guide/04add-new-item-en.md'
            }
          },
          {
            id: '05quck-modifier-price-edit',
            title: {
              zh: '5 如何修改快速修菜价格',
              en: '5 Edit Quick Modifier Price'
            },
            files: {
              zh: 'pos-system-guide/05quck-modifier-price-edit-cn.md',
              en: 'pos-system-guide/05quck-modifier-price-edit-en.md'
            }
          },
          {
            id: '06add-quick-modifier',
            title: {
              zh: '6 如何添加快速修菜',
              en: '6 Add Quick Modifier'
            },
            files: {
              zh: 'pos-system-guide/06add-quick-modifier-cn.md',
              en: 'pos-system-guide/06add-quick-modifier-en.md'
            }
          },
          {
            id: '07add-modifier',
            title: {
              zh: '7 如何添加修菜',
              en: '7 Add Modifier'
            },
            files: {
              zh: 'pos-system-guide/07add-modifier-cn.md',
              en: 'pos-system-guide/07add-modifier-en.md'
            }
          },
          {
            id: '08add-menu-group',
            title: {
              zh: '8 如何添加菜品组别',
              en: '8 Add Menu Group'
            },
            files: {
              zh: 'pos-system-guide/08add-menu-group-cn.md',
              en: 'pos-system-guide/08add-menu-group-en.md'
            }
          },
          {
            id: '09add-employee',
            title: {
              zh: '9 如何添加 / 修改员工',
              en: '9 Add or Edit Employees'
            },
            files: {
              zh: 'pos-system-guide/09add-employee-cn.md',
              en: 'pos-system-guide/09add-employee-en.md'
            }
          },
          {
            id: '10table-setup',
            title: {
              zh: '10 如何设置餐桌',
              en: '10 Table Setup'
            },
            files: {
              zh: 'pos-system-guide/10table-setup-cn.md',
              en: 'pos-system-guide/10table-setup-en.md'
            }
          },
          {
            id: '11printing-orientation',
            title: {
              zh: '11 如何设置菜品打印方向',
              en: '11 Set Menu Item Printing Orientation'
            },
            files: {
              zh: 'pos-system-guide/11printing-orientation-cn.md',
              en: 'pos-system-guide/11printing-orientation-en.md'
            }
          },
          {
            id: '12view-monthly-reports',
            title: {
              zh: '12 如何查看月报表',
              en: '12 View Monthly Reports'
            },
            files: {
              zh: 'pos-system-guide/12view-monthly-reports-cn.md',
              en: 'pos-system-guide/12view-monthly-reports-en.md'
            }
          },
          {
            id: '13more-pos-features',
            title: {
              zh: '13 更多 POS 功能',
              en: '13 More POS Features'
            },
            files: {
              zh: 'pos-system-guide/13more-pos-features-cn.md',
              en: 'pos-system-guide/13more-pos-features-en.md'
            }
          }
        ]
      }
    ]
  },

  /*
  handheldDeviceGuide: {
    name: { zh: '手持设备使用指南', en: 'Handheld Device User Guide' },
    children: [
      {
        name: { zh: '设备操作', en: 'Device Basics' },
        items: [
          {
            id: 'power-on-and-volume',
            title: {
              zh: '如何开机、调整音量',
              en: 'How to Power On and Adjust Volume'
            },
            files: {
              zh: 'handheld-device-guide/power-on-and-volume-cn.md',
              en: 'handheld-device-guide/power-on-and-volume-en.md'
            }
          },
          {
            id: 'check-serial-number',
            title: {
              zh: '如何查看 SN 号码',
              en: 'How to Check the Serial Number'
            },
            files: {
              zh: 'handheld-device-guide/check-serial-number-cn.md',
              en: 'handheld-device-guide/check-serial-number-en.md'
            }
          },
          {
            id: 'login-bm-app',
            title: {
              zh: '如何登录 BM App',
              en: 'How to Log In to the BM App'
            },
            files: {
              zh: 'handheld-device-guide/login-bm-app-cn.md',
              en: 'handheld-device-guide/login-bm-app-en.md'
            }
          },
          {
            id: 'purchase-receipt-paper',
            title: {
              zh: '如何购买打印小票',
              en: 'How to Purchase Receipt Paper'
            },
            files: {
              zh: 'handheld-device-guide/purchase-receipt-paper-cn.md',
              en: 'handheld-device-guide/purchase-receipt-paper-en.md'
            }
          }
        ]
      }
    ]
  }
  */
};
