import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const transactions = [
  {
    id: 1,
    date: '2024-03-15',
    game: '王者荣耀',
    type: '游戏币充值',
    amount: '¥100.00',
    status: 'success',
  },
  {
    id: 2,
    date: '2024-03-15',
    game: '和平精英',
    type: '皮肤购买',
    amount: '¥68.00',
    status: 'success',
  },
  {
    id: 3,
    date: '2024-03-15',
    game: '原神',
    type: '抽卡',
    amount: '¥648.00',
    status: 'success',
  },
  {
    id: 4,
    date: '2024-03-15',
    game: '阴阳师',
    type: '月卡',
    amount: '¥30.00',
    status: 'pending',
  },
  {
    id: 5,
    date: '2024-03-15',
    game: '第五人格',
    type: '角色购买',
    amount: '¥128.00',
    status: 'failed',
  },
]

export function RevenueTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日期</TableHead>
            <TableHead>游戏</TableHead>
            <TableHead>类型</TableHead>
            <TableHead className="text-right">金额</TableHead>
            <TableHead className="text-right">状态</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.game}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell className="text-right">{transaction.amount}</TableCell>
              <TableCell className="text-right">
                <span
                  className={
                    transaction.status === 'success'
                      ? 'text-green-600'
                      : transaction.status === 'pending'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }
                >
                  {transaction.status === 'success'
                    ? '成功'
                    : transaction.status === 'pending'
                    ? '处理中'
                    : '失败'}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 