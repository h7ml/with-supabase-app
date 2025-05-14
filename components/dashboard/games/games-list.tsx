"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGamesStore, Game } from "@/lib/store/games"
import { LoadingCard } from "@/components/ui/loading"
import { GameDetail } from "./game-detail"
import { GameForm } from "./game-form"

export function GamesList() {
  const { games, loading, error, fetchGames } = useGamesStore()
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  
  // 模态框状态
  const [detailOpen, setDetailOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [addOpen, setAddOpen] = useState(false)
  const [selectedGameId, setSelectedGameId] = useState<string | undefined>()

  useEffect(() => {
    fetchGames()
  }, [fetchGames])

  // 打开游戏详情模态框
  const handleViewDetail = (gameId: string) => {
    setSelectedGameId(gameId)
    setDetailOpen(true)
  }

  // 打开游戏编辑模态框
  const handleEditGame = (gameId: string) => {
    setSelectedGameId(gameId)
    setEditOpen(true)
  }

  // 打开添加游戏模态框
  const handleAddGame = () => {
    setSelectedGameId(undefined)
    setAddOpen(true)
  }

  const columns: ColumnDef<Game>[] = [
    {
      accessorKey: "name",
      header: "游戏名称",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "category",
      header: "类型",
      cell: ({ row }) => <div className="capitalize">{row.getValue("category")}</div>,
    },
    {
      accessorKey: "status",
      header: "状态",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <div className={`capitalize ${
            status === "active" 
              ? "text-green-600"
              : status === "maintenance"
              ? "text-yellow-600"
              : "text-blue-600"
          }`}>
            {status === "active" 
              ? "运营中"
              : status === "maintenance"
              ? "维护中"
              : "开发中"}
          </div>
        )
      },
    },
    {
      accessorKey: "revenue",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            收入
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="text-right">{row.getValue("revenue")}</div>,
    },
    {
      accessorKey: "users",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            用户数
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="text-right">{row.getValue("users")}</div>,
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const game = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">打开菜单</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>操作</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(game.id)}
              >
                复制游戏 ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleViewDetail(game.id)}>
                查看详情
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleEditGame(game.id)}>
                编辑信息
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data: games,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  if (loading) {
    return <LoadingCard />
  }

  if (error) {
    return <div className="p-4 text-red-500">加载失败: {error}</div>
  }

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="搜索游戏..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Button onClick={handleAddGame}>
          <Plus className="mr-2 h-4 w-4" /> 添加游戏
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  暂无数据
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          上一页
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          下一页
        </Button>
      </div>
      
      {/* 游戏详情模态框 */}
      {selectedGameId && (
        <GameDetail
          gameId={selectedGameId}
          open={detailOpen}
          onOpenChange={setDetailOpen}
        />
      )}
      
      {/* 游戏编辑模态框 */}
      {selectedGameId && (
        <GameForm
          gameId={selectedGameId}
          open={editOpen}
          onOpenChange={setEditOpen}
        />
      )}
      
      {/* 添加游戏模态框 */}
      <GameForm
        open={addOpen}
        onOpenChange={setAddOpen}
      />
    </div>
  )
} 
