interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

interface SkipsTableProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  setSelectedSkip: (skip: Skip | null) => void;
}

interface SkipsFootbarProps {
  skip: Skip;
}
