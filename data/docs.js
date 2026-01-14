module.exports = {
  printer: {
    name: '打印机设置',
    children: [
      {
        name: 'Printer Drivers',
        items: [
          {
            id: 'printer-drivers',
            title: 'Printer Drivers Download',
            file: 'printer/drivers.md'
          }
        ]
      }
    ]
  },

  terminal: {
    name: '刷卡机设置',
    children: [
      {
        name: '刷卡机型号',
        items: [
          {
            id: 'pax-a80',
            title: 'PAX A80 设置',
            file: 'terminal/pax-a80.md'
          },
          {
            id: 'pax-a35',
            title: 'PAX A35 设置',
            file: 'terminal/pax-a35.md'
          },
          {
            id: 'pax-s300',
            title: 'PAX S300 设置',
            file: 'terminal/pax-s300.md'
          },
          {
            id: 'pax-a920',
            title: 'PAX A920 设置',
            file: 'terminal/pax-a920.md'
          },
        ]
      }
    ]
  },

    pos: {
    name: 'POS设置',
    children: [
      {
        name: 'pos',
        items: [
          {
            id: 'pos',
            title: 'POS 初始化',
            file: 'pos/pos.md'
          }
        ]
      }
    ]
  }
};
