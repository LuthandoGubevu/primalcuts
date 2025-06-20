
import { Separator } from '@/components/ui/separator';

interface NutritionItemProps {
  label: string;
  value?: string;
  percent?: string;
  bold?: boolean;
  indent?: boolean;
  isSubItem?: boolean;
  borderTop?: boolean;
  thickBorder?: boolean;
}

const NutritionItem: React.FC<NutritionItemProps> = ({
  label,
  value,
  percent,
  bold = false,
  indent = false,
  isSubItem = false,
  borderTop = true,
  thickBorder = false,
}) => (
  <div className={`flex justify-between items-baseline ${borderTop ? 'border-t' : ''} ${thickBorder ? 'border-t-4' : 'border-t-1'} border-foreground/30 py-1 ${isSubItem ? 'text-sm' : ''}`}>
    <span className={`${bold ? 'font-bold' : ''} ${indent ? 'ml-4' : ''} ${isSubItem && !indent ? 'ml-1' : ''} font-body text-foreground`}>
      {label}
      {value && <span className="ml-1">{value}</span>}
    </span>
    {percent && <span className={`${bold ? 'font-bold' : ''} font-body text-foreground`}>{percent}</span>}
  </div>
);

export default function NutritionFacts() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto border-4 border-foreground p-4 md:p-6 rounded-lg shadow-lg">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-1">NUTRITION FACTS</h2>
          <Separator className="bg-foreground/50 my-1" />
          <p className="font-body text-sm text-foreground/80">1 Serving Per Container</p>
          <div className="flex justify-between items-baseline">
            <p className="font-body font-bold text-lg text-foreground">Serving Size</p>
            <p className="font-body font-bold text-lg text-foreground">2 oz (56g)</p>
          </div>
          <Separator className="bg-foreground/50 my-1 h-[2px]" />
          <div className="flex justify-between items-baseline mb-1">
            <p className="font-body text-sm font-bold text-foreground">Amount Per Serving</p>
          </div>
          <div className="flex justify-between items-baseline">
            <h3 className="font-headline text-3xl font-bold text-primary">Calories</h3>
            <p className="font-headline text-3xl font-bold text-primary">180</p>
          </div>
          <Separator className="bg-foreground my-1 h-[6px]" />
          <p className="font-body text-right font-bold text-sm text-foreground mb-1">% Daily Value*</p>
          
          {/* Main Nutrients */}
          <NutritionItem label="Total Fat" value="6g" percent="8%" bold borderTop={false}/>
          <NutritionItem label="Saturated Fat" value="2g" percent="10%" indent isSubItem/>
          <NutritionItem label="Trans Fat" value="0g" indent isSubItem/>
          <NutritionItem label="Cholesterol" value="80mg" percent="27%" bold />
          <NutritionItem label="Sodium" value="760mg" percent="33%" bold />
          <NutritionItem label="Total Carbohydrate" value="0g" percent="0%" bold />
          <NutritionItem label="Dietary Fiber" value="0g" percent="0%" indent isSubItem/>
          <NutritionItem label="Total Sugars" value="0g" indent isSubItem/>
          <NutritionItem label="Protein" value="32g" percent="64%" bold />

          <Separator className="bg-foreground my-1 h-[6px]" />

          {/* Vitamins and Minerals */}
          <NutritionItem label="Vitamin D" value="0mcg" percent="0%" borderTop={false} />
          <NutritionItem label="Calcium" value="104mg" percent="8%" />
          <NutritionItem label="Iron" value="3.6mg" percent="20%" />
          <NutritionItem label="Potassium" value="940mg" percent="20%" />
          <NutritionItem label="Riboflavin" value="0.39mg" percent="30%" />
          <NutritionItem label="Niacin" value="6.4mg" percent="40%" />
          <NutritionItem label="Vitamin B6" value="0.34mg" percent="20%" />
          <NutritionItem label="Vitamin B12" value="1.92mcg" percent="80%" />
          <NutritionItem label="Pantothenic Acid" value="0.5mg" percent="10%" />
          <NutritionItem label="Phosphorus" value="188mg" percent="15%" />
          <NutritionItem label="Magnesium" value="33.6mg" percent="8%" />
          <NutritionItem label="Zinc" value="5.5mg" percent="50%" />

          <Separator className="bg-foreground/50 my-2 h-[2px]" />
          <p className="font-body text-xs text-foreground/70 leading-relaxed">
            * The % Daily Value (DV) tells you how much a nutrient in a serving of food
            contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
          </p>
        </div>
      </div>
    </section>
  );
}
