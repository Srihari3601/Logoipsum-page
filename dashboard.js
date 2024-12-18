document.addEventListener('DOMContentLoaded', function () {
    const selectAllCheckbox = document.getElementById('select-all');
    const rowCheckboxes = document.querySelectorAll('.row-checkbox');
  
    selectAllCheckbox.addEventListener('change', function () {
      rowCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
      });
    });
  
    rowCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        if (!checkbox.checked) {
          selectAllCheckbox.checked = false;
        } else if (Array.from(rowCheckboxes).every(cb => cb.checked)) {
          selectAllCheckbox.checked = true;
        }
      });
    });

    const selectAllInvoicesCheckbox = document.getElementById('select-all-invoices');
  const invoiceRowCheckboxes = document.querySelectorAll('.invoice-row-checkbox');

  selectAllInvoicesCheckbox.addEventListener('change', function() {
    invoiceRowCheckboxes.forEach(checkbox => {
      checkbox.checked = selectAllInvoicesCheckbox.checked;
    });
  });

  invoiceRowCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (!checkbox.checked) {
        selectAllInvoicesCheckbox.checked = false;
      } else if (Array.from(invoiceRowCheckboxes).every(cb => cb.checked)) {
        selectAllInvoicesCheckbox.checked = true;
      }
    });
  });

    const selectAllActivitiesCheckbox = document.getElementById('select-all-activities');
  const activityRowCheckboxes = document.querySelectorAll('.activity-row-checkbox');

  selectAllActivitiesCheckbox.addEventListener('change', function() {
    activityRowCheckboxes.forEach(checkbox => {
      checkbox.checked = selectAllActivitiesCheckbox.checked;
    });
  });

  activityRowCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (!checkbox.checked) {
        selectAllActivitiesCheckbox.checked = false;
      } else if (Array.from(activityRowCheckboxes).every(cb => cb.checked)) {
        selectAllActivitiesCheckbox.checked = true;
      }
    });
  });
    
  });