"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";

import { email, string, z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
 
const formSchema = z.object({
  username: z
    .string()
    .min(2, {message : "uusenamme must be at least 2 characters!"})
    .max(50),
  email: z.string().email({message:"Invalid email address"}),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(["admin", "user"])
});

const EditeUser = () => {
    
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "shehab khaled",
      email:"Shehab.khaled@gmail.com",
      phone:"+20 102 044 6938",
      location:"Cairo, EG",
      role:"admin"
    },
  })
    return(
        <>
            <SheetContent>
                <SheetHeader>
                <SheetTitle className="mb-4 text-xl font-medium">Edite user</SheetTitle>
                <SheetDescription>
                    <Form {...form}>
                        <form className="space-y-8">
                            <FormField 
                                control={form.control} 
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public username.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control} 
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only admin can see your email.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control} 
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public phone number.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control} 
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is the public location.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control} 
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                    <SelectItem value="user">User</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormDescription>
                                            Only verified users can be admin.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </>
    );
}

export default EditeUser;