import { ComponentType, ReactNode, HTMLAttributes } from 'react';

// Primary Card Component
// Used for clean, white-background panels, e.g. Guidance Sidebar, Accreditations, and Brand Logos.
interface PrimaryCardProps extends HTMLAttributes<HTMLDivElement> {
  key?: any;
  className?: string;
  onClick?: any;
  title?: string;
  subtitle?: string;
  icon?: ComponentType<any>;
  children?: ReactNode;
  footer?: ReactNode;
  hoverable?: boolean;
}

export function PrimaryCard({
  title,
  subtitle,
  icon: Icon,
  children,
  footer,
  className = '',
  onClick,
  hoverable = true,
  ...props
}: PrimaryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white border border-[#E7EBF3] rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group ${
        hoverable ? 'hover:shadow-[0_24px_50px_rgba(22,29,74,0.1)] hover:-translate-y-1.5' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {/* Header with Title and optional Icon */}
      {(title || Icon || subtitle) && (
        <div className="mb-6">
          <div className="flex items-center gap-4">
            {Icon && (
              <div className="w-12 h-12 rounded-2xl bg-[#161D4A]/5 border border-[#E7EBF3] flex items-center justify-center text-[#161D4A] transition-colors duration-300 group-hover:bg-[#161D4A] group-hover:text-white">
                <Icon className="w-6 h-6" />
              </div>
            )}
            <div>
              {title && (
                <h3 className="text-xl lg:text-[24px] font-semibold text-[#161D4A] leading-tight tracking-tight">
                  {title}
                </h3>
              )}
              {subtitle && <p className="text-sm text-[#5B6475] mt-1">{subtitle}</p>}
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-1">{children}</div>
      
      {footer && <div className="mt-6 pt-6 border-t border-[#E7EBF3]">{footer}</div>}
    </div>
  );
}

// Secondary Card Component
// Used for high-contrast/neutral backgrounds, e.g. Careers, Campus Life, Industry Exposure sections.
interface SecondaryCardProps extends HTMLAttributes<HTMLDivElement> {
  key?: any;
  className?: string;
  onClick?: any;
  title?: string;
  subtitle?: string;
  icon?: ComponentType<any>;
  children?: ReactNode;
  footer?: ReactNode;
  dark?: boolean;
  hoverable?: boolean;
}

export function SecondaryCard({
  title,
  subtitle,
  icon: Icon,
  children,
  footer,
  className = '',
  onClick,
  dark = false,
  hoverable = true,
  ...props
}: SecondaryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-3xl p-8 transition-all duration-300 group ${
        dark
          ? 'bg-[#161D4A] border border-white/10 text-white shadow-lg'
          : 'bg-[#F8F9FC] border border-[#E7EBF3] text-[#1A1A1A] shadow-sm'
      } ${
        hoverable
          ? dark
            ? 'hover:border-[#FED304]/60 hover:shadow-[0_24px_50px_rgba(22,29,74,0.22)] hover:-translate-y-1.5'
            : 'hover:shadow-[0_24px_50px_rgba(22,29,74,0.12)] hover:-translate-y-1.5'
          : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {(title || Icon || subtitle) && (
        <div className="mb-6">
          <div className="flex items-center gap-4">
            {Icon && (
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  dark
                    ? 'bg-white/10 border border-white/10 text-[#FED304] group-hover:bg-[#FED304] group-hover:text-[#161D4A] group-hover:border-[#FED304]'
                    : 'bg-white border border-[#E7EBF3] text-[#161D4A] group-hover:bg-[#161D4A] group-hover:text-white group-hover:border-[#161D4A]'
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
            )}
            <div>
              {title && (
                <h3
                  className={`text-xl lg:text-[24px] font-semibold leading-tight tracking-tight ${
                    dark ? 'text-white' : 'text-[#161D4A]'
                  }`}
                >
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className={`text-sm mt-1 ${dark ? 'text-[#ADDDF1]' : 'text-[#5B6475]'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-1">{children}</div>
      
      {footer && (
        <div className={`mt-6 pt-6 border-t ${dark ? 'border-white/10' : 'border-[#E7EBF3]'}`}>
          {footer}
        </div>
      )}
    </div>
  );
}

// Image Card Component
// Flexible image layout component for Programs, Pain Points, Why Choose AMC, and Testimonials.
interface ImageCardProps extends HTMLAttributes<HTMLDivElement> {
  key?: any;
  className?: string;
  onClick?: any;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'top' | 'left' | 'background';
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  footer?: ReactNode;
  hoverable?: boolean;
  overlayContent?: ReactNode;
  isOverlayActiveByDefault?: boolean;
  darkGradient?: boolean;
}

export function ImageCard({
  imageSrc,
  imageAlt,
  imagePosition = 'top',
  title,
  subtitle,
  children,
  footer,
  className = '',
  onClick,
  hoverable = true,
  overlayContent,
  isOverlayActiveByDefault = false,
  darkGradient = false,
  ...props
}: ImageCardProps) {
  if (imagePosition === 'top') {
    return (
      <div
        onClick={onClick}
        className={`bg-[#F8F9FC] border border-[#E7EBF3] rounded-3xl overflow-hidden flex flex-col transition-all duration-300 group ${
          hoverable ? 'hover:shadow-[0_24px_50px_rgba(22,29,74,0.1)] hover:-translate-y-1.5' : ''
        } ${onClick ? 'cursor-pointer' : ''} ${className}`}
        {...props}
      >
        <div className="w-full aspect-[16/10] overflow-hidden relative shrink-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[1.04] saturate-[0.9] contrast-[1.01]"
          />
        </div>
        <div className="p-8 flex-1 flex flex-col">
          {title && (
            <h3 className="text-xl lg:text-[24px] font-semibold text-[#161D4A] mb-4 leading-tight tracking-tight">
              {title}
            </h3>
          )}
          {subtitle && <p className="text-[#5B6475] text-xs mb-2">{subtitle}</p>}
          <div className="flex-1">{children}</div>
          {footer && <div className="mt-6 pt-4">{footer}</div>}
        </div>
      </div>
    );
  }

  if (imagePosition === 'left') {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col sm:flex-row gap-8 group transition-all duration-300 ${
          onClick ? 'cursor-pointer' : ''
        } ${className}`}
        {...props}
      >
        <div className="w-full sm:w-1/3 shrink-0 overflow-hidden rounded-3xl shadow-sm relative h-48 sm:h-auto min-h-[180px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] transition-all duration-300 group-hover:shadow-md">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full absolute inset-0 object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[1.04] saturate-[0.9] contrast-[1.01]"
          />
        </div>
        <div className="w-full sm:w-2/3 flex flex-col justify-center py-2">
          {title && (
            <h3 className="text-xl lg:text-[24px] font-semibold text-[#161D4A] mb-3 leading-tight tracking-tight">
              {title}
            </h3>
          )}
          {subtitle && <p className="text-[#5B6475] text-xs mb-2">{subtitle}</p>}
          <div className="flex-1">{children}</div>
          {footer && <div className="mt-4">{footer}</div>}
        </div>
      </div>
    );
  }

  // imagePosition === 'background'
  return (
    <div
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden group transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
        hoverable ? 'hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[1.04] saturate-[0.9] contrast-[1.01]"
      />

      {/* Gradient overlay */}
      {darkGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A] via-[#161D4A]/40 to-transparent z-0" />
      )}

      {/* Standard Children on top */}
      <div className="relative z-10 w-full h-full flex flex-col">{children}</div>

      {/* Hover Overlay Content */}
      {overlayContent && (
        <div
          className={`absolute inset-0 bg-[#161D4A]/95 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center z-20 ${
            isOverlayActiveByDefault ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          {overlayContent}
        </div>
      )}
    </div>
  );
}
