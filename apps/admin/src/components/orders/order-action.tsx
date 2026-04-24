"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiPatch } from "@/lib/api";
import { NEXT_STATUS, ACTION_LABELS } from "@modern-essentials/utils";
import { Button } from "@modern-essentials/ui";
import { toast } from "sonner";

interface OrderActionProps {
  orderId: string;
  currentStatus: string;
}

export function OrderAction({ orderId, currentStatus }: OrderActionProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const nextStatus = NEXT_STATUS[currentStatus];
  const label = nextStatus ? ACTION_LABELS[nextStatus] : null;

  if (!nextStatus || !label) return null;

  const handleTransition = async () => {
    setLoading(true);
    try {
      await apiPatch(`admin/orders/${orderId}/status`, { status: nextStatus });
      toast.success(`Order marked as ${nextStatus.toLowerCase()}`);
      router.refresh();
    } catch (err) {
      console.error("Failed to update status:", err);
      toast.error("Failed to update order status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleTransition}
      isLoading={loading}
      variant="secondary"
      size="sm"
      className="bg-primary/10 text-primary hover:bg-primary/20 border-none"
    >
      {label}
    </Button>
  );
}
