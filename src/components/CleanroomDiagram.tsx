export default function CleanroomDiagram() {
  return (
    <figure className="mt-10 overflow-hidden rounded-2xl border border-border bg-muted/30 p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-3 text-sm font-medium text-foreground">
        <span className="h-px w-6 bg-primary-dark" aria-hidden="true" />
        Princip řízeného prostředí
      </div>
      <svg viewBox="0 0 480 336" role="img" aria-labelledby="cleanroom-diagram-title cleanroom-diagram-desc" className="w-full text-foreground">
        <title id="cleanroom-diagram-title">Přívod a odvod vzduchu v čistém prostoru</title>
        <desc id="cleanroom-diagram-desc">Zjednodušený řez místností: přívod vzduchu přes stropní HEPA filtr, proudění do pracovního prostoru a odvod u podlahy. Skutečné uspořádání závisí na provozu.</desc>
        <defs>
          <marker id="cleanroom-air-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M1 1 6 4 1 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </marker>
        </defs>
        <g fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
          <path d="M64 268V84H416V268M64 276H416" />
          <path d="M72 92H408V260H72Z" opacity="0.25" />
          <path d="M176 68H304V100H176Z" className="fill-background" />
          <path d="M184 76H296M184 84H296M184 92H296" opacity="0.6" />
          <path d="M180 212H300V220H180ZM192 220V260M288 220V260" />
          <path d="M64 236H84V252H64M396 236H416V252H396M72 240V248M78 240V248M402 240V248M408 240V248" />
        </g>
        <g fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#cleanroom-air-arrow)" className="text-primary-dark">
          <path d="M240 36V60" />
          <path d="M200 112V180" />
          <path d="M240 112V180" />
          <path d="M280 112V180" />
          <path d="M160 132V208Q160 244 100 244" />
          <path d="M320 132V208Q320 244 380 244" />
          <path d="M56 244H28" />
          <path d="M424 244H452" />
        </g>
        <g fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-dark">
          <path d="M312 80H344V52H360" />
          <path d="M320 172H352" />
          <path d="M404 284V300H360" />
        </g>
        <g fill="currentColor" fontFamily="inherit" className="text-[22px] text-foreground sm:text-[15px]">
          <text x="240" y="24" textAnchor="middle">Přívod vzduchu</text>
          <text x="368" y="56">HEPA filtr</text>
          <text x="360" y="176">Proudění</text>
          <text x="352" y="305" textAnchor="end">Odvod vzduchu</text>
        </g>
      </svg>
      <figcaption className="border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Zjednodušené schéma. Směr proudění, filtrace a tlakové poměry se navrhují podle konkrétního procesu.
      </figcaption>
    </figure>
  );
}
