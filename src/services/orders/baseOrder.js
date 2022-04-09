class BaseOrder {
  constructor({ orderRepo, orderProductRepo }) {
    this.orderRepo = orderRepo
    this.orderProductRepo = orderProductRepo
  }
}

module.exports = BaseOrder
