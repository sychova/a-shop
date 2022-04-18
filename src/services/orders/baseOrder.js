class BaseOrder {
  constructor({ orderRepo, orderProductRepo, paginator }) {
    this.orderRepo = orderRepo
    this.orderProductRepo = orderProductRepo
    this.paginator = paginator
  }
}

module.exports = BaseOrder
