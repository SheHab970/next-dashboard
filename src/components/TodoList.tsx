"use client"

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList =  () => {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
    return(
        <>
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                        className="rounded-md border shadow-sm"
                        captionLayout="dropdown"
                    />
                </PopoverContent>
            </Popover>
            {/* LIST  */}
            <ScrollArea className="h-[420px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4 p-4">
                    {/* LIST ITEM  */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked/>
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM  */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item2" checked/>
                            <label htmlFor="item2" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM  */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item3"/>
                            <label htmlFor="item3" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM  */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item4" checked/>
                            <label htmlFor="item4" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM  */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item5"/>
                            <label htmlFor="item5" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM  */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item6" checked/>
                            <label htmlFor="item6" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    {/* LIST ITEM  */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item7"/>
                            <label htmlFor="item7" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                </div>

            </ScrollArea>
        </>
    )
}

export default TodoList;