import AppLineChart from "@/components/AppLineChart";
import CardList from "@/components/CardList";
import EditeUser from "@/components/EditeUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

const SingleUserPage = () => {
    return(
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Shahab Khaled</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* CONTAINER  */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* LEFT  */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* USER BADGES CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-medium">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size={36} className="rounded-full bg-green-500/30 border border-green-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">Admin users have access to all features and can manage users.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy size={36} className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awared</h1>
                                    <p className="text-sm text-muted-foreground">This user has been awared for their contribution.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus size={36} className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">This user has been poplur in community.</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/* INFORMATION CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-medium">User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>Edite User</Button>
                                </SheetTrigger>
                                <EditeUser />
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile completion</p>
                                <Progress value={70} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span>Shehab khaled</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span>Shehab.khaled@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Phone:</span>
                                <span>+20 102 044 6938</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span>Cairo, EG</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">Joined on 2025.09.04</p>
                    </div>
                    {/* CARD LIST CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions"/>
                    </div>
                </div>
                {/* RIGHT  */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* USER CARD CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                            <Avatar className="size-12">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>SK</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl">Shehab Khaled</h1>
                        </div>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, ex. Magnam nam quae odio? Itaque a rem natus quidem non repellat, eaque nam! Inventore, assumenda quo animi officiis fuga soluta?</p>
                    </div>
                    {/* CHART CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-medium mb-4">User Activity</h1>
                        <AppLineChart/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleUserPage;