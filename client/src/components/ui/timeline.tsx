import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative space-y-12", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  date?: React.ReactNode;
  title?: React.ReactNode;
  children: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, icon, date, title, children, isLast = false, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {!isLast && (
          <div className="absolute top-0 left-8 bottom-0 w-px bg-gray-200 hidden md:block"></div>
        )}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-64 flex-shrink-0 mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hidden md:flex">
                {icon}
              </div>
              <div className="md:ml-4">
                {date && <span className="text-sm text-gray-500 block">{date}</span>}
                {title && <span className="font-semibold text-primary-dark block">{title}</span>}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex-grow">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
