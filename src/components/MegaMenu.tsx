
import { 
  general_partner,
  chief_financial_officer,
  investor_relations, 
  business_development,
  customer_relationship_management,
  real_estate,
  private_equity,
  private_debt,
  venture_capital,
  corporate_venture_capital,
  hedge_fund,
  family_offices,
  ria,
  wealth_management
} from "lucide-react";
import { Icon } from 'lucide-react';
import { cn } from "@/lib/utils";

// Type definitions
type MegaMenuContentType = {
  title: string;
  url?: string;
  iconName?: string;
  items?: {
    title: string;
    url: string;
    subItems?: { title: string; url: string }[];
  }[];
};

type MegaMenuColumnType = {
  title: string;
  contents: MegaMenuContentType[];
  specialContent?: React.ReactNode;
};

type MegaMenuConfigType = {
  columns: MegaMenuColumnType[];
  featuredContent?: React.ReactNode;
};

type MegaMenuProps = {
  config: MegaMenuConfigType;
};

// Icon mapping with Lucide icons
const iconMap: Record<string, any> = {
  "general-partner": general_partner,
  "chief-financial-officer": chief_financial_officer,
  "investor-relations": investor_relations,
  "business-development": business_development,
  "customer-relationship-management": customer_relationship_management,
  "real-estate": real_estate,
  "private-equity": private_equity,
  "private-debt": private_debt,
  "venture-capital": venture_capital,
  "corporate-venture-capital": corporate_venture_capital,
  "hedge-fund": hedge_fund,
  "family-offices": family_offices,
  "ria": ria,
  "wealth-management": wealth_management
};

const MegaMenu = ({ config }: MegaMenuProps) => {
  // Calculate grid columns based on number of columns in config
  const gridCols = config.columns.length <= 2 ? 
    `grid-cols-${config.columns.length}` : 
    "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="mega-menu-container w-full border-t border-gray-200 dark:border-dseza-dark-hover bg-white dark:bg-dseza-dark-secondary/80 shadow-lg backdrop-blur-md">
      <div className="max-w-6xl mx-auto p-8">
        <div className={`grid ${gridCols} gap-8`}>
          {config.columns.map((column, colIndex) => (
            <div key={colIndex} className="menu-column">
              <h5 className="text-lg font-semibold pb-3 mb-3 border-b border-gray-300 dark:border-dseza-dark-hover">
                {column.title}
              </h5>
              
              <ul className="space-y-1">
                {column.contents.map((content, contentIndex) => (
                  <li key={contentIndex}>
                    <a 
                      href={content.url || "#"}
                      className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-dseza-light-hover dark:hover:bg-dseza-dark-hover transition-colors"
                    >
                      {content.iconName && iconMap[content.iconName] && (
                        <Icon 
                          size={20} 
                          className="text-dseza-light-primary dark:text-dseza-dark-primary"
                          iconNode={iconMap[content.iconName]} 
                        />
                      )}
                      <span className="font-medium">{content.title}</span>
                    </a>

                    {content.items && content.items.length > 0 && (
                      <ul className="ml-8 mt-1 space-y-1">
                        {content.items.map((subItem, subItemIndex) => (
                          <li key={subItemIndex}>
                            <a 
                              href={subItem.url}
                              className="block py-1.5 px-3 rounded-md text-sm hover:bg-dseza-light-hover dark:hover:bg-dseza-dark-hover transition-colors"
                            >
                              {subItem.title}
                            </a>
                            
                            {subItem.subItems && subItem.subItems.length > 0 && (
                              <ul className="ml-5 mt-1 space-y-1">
                                {subItem.subItems.map((nestedItem, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <a 
                                      href={nestedItem.url}
                                      className="block py-1 px-3 rounded-md text-xs hover:bg-dseza-light-hover dark:hover:bg-dseza-dark-hover transition-colors"
                                    >
                                      {nestedItem.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Special content block */}
              {column.specialContent && (
                <div className="mt-5">
                  {column.specialContent}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Optional featured content */}
        {config.featuredContent && (
          <div className="mt-8 border-t border-gray-200 dark:border-dseza-dark-hover pt-6">
            {config.featuredContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
