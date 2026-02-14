import type { Order } from "./types"

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    items: [],
    total: 8999,
    status: "Delivered",
    date: "2026-02-10",
    customer: "Priya Sharma",
  },
  {
    id: "ORD-002",
    items: [],
    total: 35999,
    status: "Shipped",
    date: "2026-02-12",
    customer: "Ananya Gupta",
  },
  {
    id: "ORD-003",
    items: [],
    total: 4999,
    status: "Processing",
    date: "2026-02-13",
    customer: "Meera Patel",
  },
  {
    id: "ORD-004",
    items: [],
    total: 15999,
    status: "Pending",
    date: "2026-02-14",
    customer: "Riya Singh",
  },
  {
    id: "ORD-005",
    items: [],
    total: 2499,
    status: "Delivered",
    date: "2026-02-08",
    customer: "Kavya Nair",
  },
]
