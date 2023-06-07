export interface TableModelItem {
  property?: string
  label?: string
}

export interface TableInterface extends Object {
  data?: TableModelItem[]
  tableData?: any[]
  select?: boolean
}
