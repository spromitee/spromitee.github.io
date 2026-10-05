import React from 'react';

interface PanelProps {
  title: string;
  backgroundImageUrl: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  displayClass: string; 
  panelIndex: number; // Kept in props for now, though not used for title positioning
}

const CorrectedPanel: React.FC<PanelProps> = ({ title, backgroundImageUrl, isActive, onClick, children, displayClass }) => {

  const h3BaseClasses = `
    font-bold absolute m-0 z-10
    transition-all duration-300 ease-in-out
    whitespace-nowrap
  `;

  // Active panel: title sits top-left on every screen size.
  // Inactive panel: on mobile the panels are stacked horizontal bars, so the
  // title stays horizontal and vertically centered; on desktop the rotated
  // title is centered (not bottom-anchored) in the collapsed vertical panel.
  const h3ActiveClasses = `opacity-100 text-2xl sm:text-3xl top-5 left-5`;
  const h3InactiveClasses = `opacity-90 text-lg top-1/2 left-5 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:-rotate-90`;

  return (
    <div
      className={`
        relative bg-cover bg-center rounded-[50px] text-white cursor-pointer m-2.5 
        transition-all duration-700 ease-in-out
        ${isActive ? 'h-[70vh] md:h-[80vh] md:flex-[5]' : 'h-16 md:h-[80vh] md:flex-[0.5]'}
        ${displayClass}
      `}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      onClick={onClick}
      role="button"
      aria-expanded={isActive}
      aria-label={`Panel: ${title}`}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      <div className={`absolute inset-0 bg-black ${isActive ? 'bg-opacity-70' : 'bg-opacity-40'} rounded-[50px] transition-all duration-700 ease-in-out`}></div>
      
      <h3
        className={`${h3BaseClasses} ${isActive ? h3ActiveClasses : h3InactiveClasses}`}
      >
        {title}
      </h3>
      
      <div 
        data-active={isActive} 
        className="custom-scrollbar absolute top-20 md:top-24 bottom-5 left-5 right-5 opacity-0 transition-opacity duration-300 ease-in-out delay-[400ms] data-[active=true]:opacity-100 overflow-y-auto p-1 sm:p-2 z-20"
        aria-hidden={!isActive}
      >
         {isActive && children}
      </div>
    </div>
  );
};

export default CorrectedPanel;
