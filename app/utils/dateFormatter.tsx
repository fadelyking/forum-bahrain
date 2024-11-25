import { formatDistanceToNow } from "date-fns";
import { ar } from "date-fns/locale"; // Import Arabic locale (optional)

// Function to format dates relative to now
const formatDate = (date) => {
	return formatDistanceToNow(date, { addSuffix: true, locale: ar });
};

export default formatDate;
