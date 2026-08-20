import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type PlanId = 'free' | 'basic' | 'pro' | 'premium' | 'unlimited';

const PLAN_NAMES: Record<PlanId, string> = {
  free: 'Free',
  basic: 'Basic',
  pro: 'Pro',
  premium: 'Premium',
  unlimited: 'Unlimited',
};

export interface PlanBadgeProps {
  /** Lowest plan that unlocks the feature the badge sits next to. */
  plan: PlanId;
  /** Overrides the generated label. Use only when the default sentence is wrong. */
  children?: ReactNode;
}

/**
 * Pill stating the minimum plan required for a feature.
 *
 * The plan grid in the app is the source of truth for which plan unlocks what.
 * Check it before adding a badge, see CONTRIBUTING.md.
 */
export default function PlanBadge({plan, children}: PlanBadgeProps): ReactNode {
  const name = PLAN_NAMES[plan];
  const label =
    children ?? (plan === 'free' ? 'All plans' : `${name} plan and above`);

  return (
    <span className={clsx(styles.badge, styles[plan])} data-plan={plan}>
      {label}
    </span>
  );
}
