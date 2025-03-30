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

interface TimelineItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
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
        {/* Vertical timeline line with cyberpunk styling */}
        {!isLast && (
          <div className="absolute top-0 left-8 bottom-0 hidden md:block">
            {/* Animated gradient line */}
            <div className="absolute inset-0 w-0.5 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-cyan-500 bg-[length:100%_300%] animate-pulse"></div>
            
            {/* Dotted overlay for tech effect */}
            <div className="absolute inset-0 w-0.5 bg-black overflow-hidden">
              <div className="h-full w-full opacity-50" 
                   style={{ 
                     backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.1) 10%)', 
                     backgroundSize: '0.5px 20px'
                   }}>
              </div>
            </div>
            
            {/* Animated scanner effect */}
            <div className="absolute inset-0 w-0.5 overflow-hidden pointer-events-none">
              <div className="h-24 w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent absolute animate-scan" style={{opacity: '0.7'}}></div>
            </div>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side: icon and metadata */}
          <div className="md:w-64 flex-shrink-0 mb-4 md:mb-0">
            <div className="flex items-center">
              {/* Icon circle with cyberpunk styling */}
              <div className="relative hidden md:flex">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full opacity-75 blur"></div>
                <div className="relative w-16 h-16 bg-black rounded-full flex items-center justify-center border border-gray-800 shadow-[0_0_15px_rgba(80,250,250,0.5)]">
                  {icon}
                </div>
              </div>
              
              {/* Date and title with tech styling */}
              <div className="md:ml-4 flex-grow md:flex-grow-0">
                {date && <div className="mb-1">{date}</div>}
                {title && <div className="font-bold text-lg">{title}</div>}
              </div>
            </div>
          </div>
          
          {/* Right side: content */}
          <div className="flex-grow">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
