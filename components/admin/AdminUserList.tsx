import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Mail, UserCog, UserX } from "lucide-react"

// Mock users data
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    status: "active",
    courses: 4,
    joinedAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Test User",
    email: "user@example.com",
    role: "user",
    status: "active",
    courses: 2,
    joinedAt: "2023-02-20",
  },
  {
    id: "3",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    status: "inactive",
    courses: 0,
    joinedAt: "2023-03-10",
  },
  {
    id: "4",
    name: "Michael Johnson",
    email: "michael@example.com",
    role: "user",
    status: "active",
    courses: 3,
    joinedAt: "2023-01-25",
  },
  {
    id: "5",
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "user",
    status: "active",
    courses: 1,
    joinedAt: "2023-04-05",
  },
]

export default function AdminUserList() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Users</h2>
        <Button>Add User</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={user.role === "admin" ? "default" : "outline"}>{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.courses}</TableCell>
                <TableCell>{user.joinedAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex items-center">
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email User</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center">
                        <UserCog className="mr-2 h-4 w-4" />
                        <span>Edit User</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex items-center text-destructive focus:text-destructive">
                        <UserX className="mr-2 h-4 w-4" />
                        <span>Deactivate User</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

