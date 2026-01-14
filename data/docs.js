module.exports = {
  printer: {
    name: '打印机设置',
    children: [
      {
        name: 'Epson',
        items: [
          {
            id: 'epson-80mm',
            title: 'Epson 80mm 安装',
            file: 'printer/epson-80mm.md'
          }
        ]
      }
    ]
  },

  terminal: {
    name: '刷卡机设置',
    children: [
      {
        name: 'PAX',
        items: [
          {
            id: 'pax-a80',
            title: 'PAX A80 初始化',
            file: 'terminal/pax-a80.md'
          },
          {
            id: 'pax-s300',
            title: 'PAX S300 初始化',
            file: 'terminal/pax-s300.md'
          }
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
