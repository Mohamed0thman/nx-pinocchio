// Define a common interface for Notification types
export interface Signal {
  show(): void;
  hide(): void;
}

// Manager class manages Signals instances
class Manager<T extends Signal> {
  private currentSignal: T | null = null;
  private enabled = true;

  get isEnabled(): boolean {
    return this.enabled;
  }

  register(instance: T | null): void {
    if (instance && !this.currentSignal) {
      this.currentSignal = instance;
    }
  }

  getCurrent(): T | null {
    return this.currentSignal;
  }
}

// Higher-order functions for showing and hiding notifications
function showNotification<T extends Signal>(
  manager: Manager<T>,
  showFn: (instance: T) => void
) {
  if (manager.isEnabled) {
    const ref = manager.getCurrent();
    if (ref) showFn(ref);
  }
}

function hideNotification<T extends Signal>(
  manager: Manager<T>,
  hideFn: (instance: T) => void
) {
  if (manager.isEnabled) {
    const ref = manager.getCurrent();
    if (ref) hideFn(ref);
  }
}

export const alertManager = new Manager<Signal>();
export const toastManager = new Manager<Signal>();

export const showAlert = () =>
  showNotification(alertManager, (instance) => instance.show());
export const hideAlert = () =>
  hideNotification(alertManager, (instance) => instance.hide());
export const showToast = () =>
  showNotification(toastManager, (instance) => instance.show());
export const hideToast = () =>
  hideNotification(toastManager, (instance) => instance.hide());
