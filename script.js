document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const mobileMenu = document.getElementById('mobileMenu');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      document.body.classList.add('logged-in');
      setTimeout(() => {
        document.body.classList.remove('sidebar-open');
      }, 100);
    });
  }

  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-open');
    });
  }

  const salesCtx = document.getElementById('salesChart');
  if (salesCtx) {
    new Chart(salesCtx, {
      type: 'bar',
      data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
        datasets: [
          {
            label: '매출',
            data: [320, 410, 380, 520, 610, 570, 700],
            backgroundColor: ['#2f5bff', '#7a5af8', '#40c4ff', '#16b57c', '#ffc857', '#ff8a65', '#2f5bff'],
            borderRadius: 8,
            barThickness: 26,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: false,
            grid: {
              color: '#edf1f7',
            },
          },
        },
      },
    });
  }
});
